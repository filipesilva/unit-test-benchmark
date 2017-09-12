import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8633Component } from './my-comp-8633.component';

describe('MyComp8633Component', () => {
  let component: MyComp8633Component;
  let fixture: ComponentFixture<MyComp8633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
