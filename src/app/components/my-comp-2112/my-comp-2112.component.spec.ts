import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2112Component } from './my-comp-2112.component';

describe('MyComp2112Component', () => {
  let component: MyComp2112Component;
  let fixture: ComponentFixture<MyComp2112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
