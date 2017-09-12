import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp872Component } from './my-comp-872.component';

describe('MyComp872Component', () => {
  let component: MyComp872Component;
  let fixture: ComponentFixture<MyComp872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
