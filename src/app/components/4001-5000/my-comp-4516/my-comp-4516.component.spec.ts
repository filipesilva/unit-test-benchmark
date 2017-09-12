import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4516Component } from './my-comp-4516.component';

describe('MyComp4516Component', () => {
  let component: MyComp4516Component;
  let fixture: ComponentFixture<MyComp4516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
