import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8992Component } from './my-comp-8992.component';

describe('MyComp8992Component', () => {
  let component: MyComp8992Component;
  let fixture: ComponentFixture<MyComp8992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
