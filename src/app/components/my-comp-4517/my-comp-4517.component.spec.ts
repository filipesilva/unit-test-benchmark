import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4517Component } from './my-comp-4517.component';

describe('MyComp4517Component', () => {
  let component: MyComp4517Component;
  let fixture: ComponentFixture<MyComp4517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
