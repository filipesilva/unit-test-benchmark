import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5837Component } from './my-comp-5837.component';

describe('MyComp5837Component', () => {
  let component: MyComp5837Component;
  let fixture: ComponentFixture<MyComp5837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
