import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2308Component } from './my-comp-2308.component';

describe('MyComp2308Component', () => {
  let component: MyComp2308Component;
  let fixture: ComponentFixture<MyComp2308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
