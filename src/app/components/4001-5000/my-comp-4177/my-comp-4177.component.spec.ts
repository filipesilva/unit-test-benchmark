import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4177Component } from './my-comp-4177.component';

describe('MyComp4177Component', () => {
  let component: MyComp4177Component;
  let fixture: ComponentFixture<MyComp4177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
