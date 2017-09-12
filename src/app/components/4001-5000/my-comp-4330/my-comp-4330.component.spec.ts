import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4330Component } from './my-comp-4330.component';

describe('MyComp4330Component', () => {
  let component: MyComp4330Component;
  let fixture: ComponentFixture<MyComp4330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
