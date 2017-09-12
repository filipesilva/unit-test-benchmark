import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5935Component } from './my-comp-5935.component';

describe('MyComp5935Component', () => {
  let component: MyComp5935Component;
  let fixture: ComponentFixture<MyComp5935Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5935Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5935Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
