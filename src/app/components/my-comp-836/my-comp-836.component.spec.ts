import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp836Component } from './my-comp-836.component';

describe('MyComp836Component', () => {
  let component: MyComp836Component;
  let fixture: ComponentFixture<MyComp836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
