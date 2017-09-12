import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5444Component } from './my-comp-5444.component';

describe('MyComp5444Component', () => {
  let component: MyComp5444Component;
  let fixture: ComponentFixture<MyComp5444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
