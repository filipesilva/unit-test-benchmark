import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8176Component } from './my-comp-8176.component';

describe('MyComp8176Component', () => {
  let component: MyComp8176Component;
  let fixture: ComponentFixture<MyComp8176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
