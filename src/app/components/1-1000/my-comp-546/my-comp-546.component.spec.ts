import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp546Component } from './my-comp-546.component';

describe('MyComp546Component', () => {
  let component: MyComp546Component;
  let fixture: ComponentFixture<MyComp546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
