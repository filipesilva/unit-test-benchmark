import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3843Component } from './my-comp-3843.component';

describe('MyComp3843Component', () => {
  let component: MyComp3843Component;
  let fixture: ComponentFixture<MyComp3843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
