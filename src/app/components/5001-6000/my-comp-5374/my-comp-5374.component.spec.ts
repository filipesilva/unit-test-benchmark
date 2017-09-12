import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5374Component } from './my-comp-5374.component';

describe('MyComp5374Component', () => {
  let component: MyComp5374Component;
  let fixture: ComponentFixture<MyComp5374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
