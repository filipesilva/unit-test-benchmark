import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6409Component } from './my-comp-6409.component';

describe('MyComp6409Component', () => {
  let component: MyComp6409Component;
  let fixture: ComponentFixture<MyComp6409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
