import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7800Component } from './my-comp-7800.component';

describe('MyComp7800Component', () => {
  let component: MyComp7800Component;
  let fixture: ComponentFixture<MyComp7800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
