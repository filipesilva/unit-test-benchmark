import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5556Component } from './my-comp-5556.component';

describe('MyComp5556Component', () => {
  let component: MyComp5556Component;
  let fixture: ComponentFixture<MyComp5556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
