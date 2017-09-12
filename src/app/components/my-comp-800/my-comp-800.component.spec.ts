import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp800Component } from './my-comp-800.component';

describe('MyComp800Component', () => {
  let component: MyComp800Component;
  let fixture: ComponentFixture<MyComp800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
