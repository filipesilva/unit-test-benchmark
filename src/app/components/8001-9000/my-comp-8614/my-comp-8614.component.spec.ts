import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8614Component } from './my-comp-8614.component';

describe('MyComp8614Component', () => {
  let component: MyComp8614Component;
  let fixture: ComponentFixture<MyComp8614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
