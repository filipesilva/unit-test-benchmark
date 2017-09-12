import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8568Component } from './my-comp-8568.component';

describe('MyComp8568Component', () => {
  let component: MyComp8568Component;
  let fixture: ComponentFixture<MyComp8568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
