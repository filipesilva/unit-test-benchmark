import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8167Component } from './my-comp-8167.component';

describe('MyComp8167Component', () => {
  let component: MyComp8167Component;
  let fixture: ComponentFixture<MyComp8167Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8167Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
