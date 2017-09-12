import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8809Component } from './my-comp-8809.component';

describe('MyComp8809Component', () => {
  let component: MyComp8809Component;
  let fixture: ComponentFixture<MyComp8809Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8809Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8809Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
