import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8063Component } from './my-comp-8063.component';

describe('MyComp8063Component', () => {
  let component: MyComp8063Component;
  let fixture: ComponentFixture<MyComp8063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
