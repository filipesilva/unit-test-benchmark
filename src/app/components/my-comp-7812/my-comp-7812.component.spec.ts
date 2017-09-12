import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7812Component } from './my-comp-7812.component';

describe('MyComp7812Component', () => {
  let component: MyComp7812Component;
  let fixture: ComponentFixture<MyComp7812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
