import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2406Component } from './my-comp-2406.component';

describe('MyComp2406Component', () => {
  let component: MyComp2406Component;
  let fixture: ComponentFixture<MyComp2406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
