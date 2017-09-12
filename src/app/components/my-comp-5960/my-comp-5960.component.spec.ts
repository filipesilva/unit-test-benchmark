import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5960Component } from './my-comp-5960.component';

describe('MyComp5960Component', () => {
  let component: MyComp5960Component;
  let fixture: ComponentFixture<MyComp5960Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5960Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
