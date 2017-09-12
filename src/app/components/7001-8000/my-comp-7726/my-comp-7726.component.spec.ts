import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7726Component } from './my-comp-7726.component';

describe('MyComp7726Component', () => {
  let component: MyComp7726Component;
  let fixture: ComponentFixture<MyComp7726Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7726Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
