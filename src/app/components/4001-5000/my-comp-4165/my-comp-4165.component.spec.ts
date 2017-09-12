import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4165Component } from './my-comp-4165.component';

describe('MyComp4165Component', () => {
  let component: MyComp4165Component;
  let fixture: ComponentFixture<MyComp4165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
