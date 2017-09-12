import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8584Component } from './my-comp-8584.component';

describe('MyComp8584Component', () => {
  let component: MyComp8584Component;
  let fixture: ComponentFixture<MyComp8584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
