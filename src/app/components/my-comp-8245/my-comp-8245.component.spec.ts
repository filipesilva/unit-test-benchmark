import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8245Component } from './my-comp-8245.component';

describe('MyComp8245Component', () => {
  let component: MyComp8245Component;
  let fixture: ComponentFixture<MyComp8245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
