import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7228Component } from './my-comp-7228.component';

describe('MyComp7228Component', () => {
  let component: MyComp7228Component;
  let fixture: ComponentFixture<MyComp7228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
