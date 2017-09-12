import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2044Component } from './my-comp-2044.component';

describe('MyComp2044Component', () => {
  let component: MyComp2044Component;
  let fixture: ComponentFixture<MyComp2044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
