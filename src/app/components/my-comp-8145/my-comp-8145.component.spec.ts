import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8145Component } from './my-comp-8145.component';

describe('MyComp8145Component', () => {
  let component: MyComp8145Component;
  let fixture: ComponentFixture<MyComp8145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
