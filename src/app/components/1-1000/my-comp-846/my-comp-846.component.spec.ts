import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp846Component } from './my-comp-846.component';

describe('MyComp846Component', () => {
  let component: MyComp846Component;
  let fixture: ComponentFixture<MyComp846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
