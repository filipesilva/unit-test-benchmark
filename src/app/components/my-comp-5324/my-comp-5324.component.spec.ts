import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5324Component } from './my-comp-5324.component';

describe('MyComp5324Component', () => {
  let component: MyComp5324Component;
  let fixture: ComponentFixture<MyComp5324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
