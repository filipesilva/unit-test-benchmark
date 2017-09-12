import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8790Component } from './my-comp-8790.component';

describe('MyComp8790Component', () => {
  let component: MyComp8790Component;
  let fixture: ComponentFixture<MyComp8790Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8790Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
