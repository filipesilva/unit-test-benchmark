import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp183Component } from './my-comp-183.component';

describe('MyComp183Component', () => {
  let component: MyComp183Component;
  let fixture: ComponentFixture<MyComp183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
