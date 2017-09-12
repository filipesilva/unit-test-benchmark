import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8288Component } from './my-comp-8288.component';

describe('MyComp8288Component', () => {
  let component: MyComp8288Component;
  let fixture: ComponentFixture<MyComp8288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
