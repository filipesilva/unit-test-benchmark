import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8929Component } from './my-comp-8929.component';

describe('MyComp8929Component', () => {
  let component: MyComp8929Component;
  let fixture: ComponentFixture<MyComp8929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
