import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3516Component } from './my-comp-3516.component';

describe('MyComp3516Component', () => {
  let component: MyComp3516Component;
  let fixture: ComponentFixture<MyComp3516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
