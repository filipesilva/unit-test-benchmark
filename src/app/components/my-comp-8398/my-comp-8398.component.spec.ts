import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8398Component } from './my-comp-8398.component';

describe('MyComp8398Component', () => {
  let component: MyComp8398Component;
  let fixture: ComponentFixture<MyComp8398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
