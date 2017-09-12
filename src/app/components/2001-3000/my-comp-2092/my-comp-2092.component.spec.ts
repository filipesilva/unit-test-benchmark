import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2092Component } from './my-comp-2092.component';

describe('MyComp2092Component', () => {
  let component: MyComp2092Component;
  let fixture: ComponentFixture<MyComp2092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
