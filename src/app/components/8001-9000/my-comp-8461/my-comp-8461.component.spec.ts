import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8461Component } from './my-comp-8461.component';

describe('MyComp8461Component', () => {
  let component: MyComp8461Component;
  let fixture: ComponentFixture<MyComp8461Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8461Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8461Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
