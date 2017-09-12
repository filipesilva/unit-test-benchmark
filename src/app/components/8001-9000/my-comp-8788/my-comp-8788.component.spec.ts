import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8788Component } from './my-comp-8788.component';

describe('MyComp8788Component', () => {
  let component: MyComp8788Component;
  let fixture: ComponentFixture<MyComp8788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
