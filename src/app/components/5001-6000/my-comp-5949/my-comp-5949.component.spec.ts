import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5949Component } from './my-comp-5949.component';

describe('MyComp5949Component', () => {
  let component: MyComp5949Component;
  let fixture: ComponentFixture<MyComp5949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
