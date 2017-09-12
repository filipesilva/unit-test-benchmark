import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7629Component } from './my-comp-7629.component';

describe('MyComp7629Component', () => {
  let component: MyComp7629Component;
  let fixture: ComponentFixture<MyComp7629Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7629Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7629Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
