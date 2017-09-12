import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8965Component } from './my-comp-8965.component';

describe('MyComp8965Component', () => {
  let component: MyComp8965Component;
  let fixture: ComponentFixture<MyComp8965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
