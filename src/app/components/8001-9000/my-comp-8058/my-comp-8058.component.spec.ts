import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8058Component } from './my-comp-8058.component';

describe('MyComp8058Component', () => {
  let component: MyComp8058Component;
  let fixture: ComponentFixture<MyComp8058Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8058Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8058Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
