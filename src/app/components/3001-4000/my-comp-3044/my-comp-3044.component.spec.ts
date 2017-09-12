import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3044Component } from './my-comp-3044.component';

describe('MyComp3044Component', () => {
  let component: MyComp3044Component;
  let fixture: ComponentFixture<MyComp3044Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3044Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
