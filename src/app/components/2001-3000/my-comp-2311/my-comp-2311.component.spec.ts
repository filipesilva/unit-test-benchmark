import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2311Component } from './my-comp-2311.component';

describe('MyComp2311Component', () => {
  let component: MyComp2311Component;
  let fixture: ComponentFixture<MyComp2311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
