import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4272Component } from './my-comp-4272.component';

describe('MyComp4272Component', () => {
  let component: MyComp4272Component;
  let fixture: ComponentFixture<MyComp4272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
